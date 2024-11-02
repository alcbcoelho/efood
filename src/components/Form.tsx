import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { InputMask } from "@react-input/mask";
import * as Yup from "yup";

import { RootState } from "../store";
import { changeElementToRender } from "../store/reducers/sidebarSlice";
import { setCloseable } from "../store/reducers/overlaySlice";
import { removeAllItems as removeAllItemsFromCart } from "../store/reducers/cartSlice";
import { useCheckoutPurchaseMutation } from "../services/api";

import { FiAlertTriangle } from "react-icons/fi";
import OrderConfirmationMessage from "./OrderConfirmationMessage";
import Spinner from "./Spinner";

import { GridContainer } from "../containers/styles/GridContainer";
import { Button } from "./styles/Button";
import { colors } from "../global-style";
import * as s from "./styles/Form";

import { formatPrice, getTotalPrice } from "../utils";

const initialValues = {
  receiver: "",
  address: "",
  city: "",
  postalCode: "",
  number: "",
  complement: "",
  cardOwner: "",
  cardNumber: "",
  verificationCode: "",
  expirationMonth: "",
  expirationYear: ""
};

export type FieldName = keyof typeof initialValues;

const currentDate = new Date();
const maskReplacement = { _: /\d/ };

export default function Form() {
  const [formPage, setFormPage] = useState<1 | 2>(1);
  const [checkoutPurchase, { data, isSuccess, isLoading }] =
    useCheckoutPurchaseMutation();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      receiver: Yup.string()
        .matches(
          /[\p{L}]{2,} [\p{L}]{2,}/u,
          "Campo deve conter nome e sobrenome do cliente, cada um com pelo menos 2 caracteres"
        )
        .required("Campo obrigatório"),
      address: Yup.string().required("Campo obrigatório"),
      city: Yup.string().required("Campo obrigatório"),
      postalCode: Yup.string()
        .matches(/\d{5}-\d{3}/, "Campo deve conter 8 dígitos")
        .required("Campo obrigatório"),
      number: Yup.number()
        .moreThan(0, "Valor do campo deve ser maior que zero")
        .required("Campo obrigatório"),
      complement: Yup.string(),
      cardOwner: Yup.string()
        .matches(
          /[\p{L}]{2,} [\p{L}]{2,}/u,
          "Campo deve conter nome e sobrenome do titular do cartão, cada um com pelo menos 2 caracteres"
        )
        .required("Campo obrigatório"),
      cardNumber: Yup.string()
        .matches(/\d{4} \d{4} \d{4} \d{4}/, "Campo deve conter 16 dígitos")
        .required("Campo obrigatório"),
      verificationCode: Yup.string()
        .matches(/\d{3}/, "Campo deve conter 3 dígitos")
        .required("Campo obrigatório"),
      expirationMonth: Yup.number()
        .min(1, "Valor do campo deve corresponder a um mês (1-12)")
        .max(12, "Valor do campo deve corresponder a um mês (1-12)")
        .required("Campo obrigatório"),
      expirationYear: Yup.number()
        .when("expirationMonth", {
          is: (value: number) => value <= currentDate.getMonth() + 1,
          then: (schema) =>
            schema.min(
              currentDate.getFullYear() + 1,
              `Valor do campo deve ser pelo menos igual a ${
                currentDate.getFullYear() + 1
              }`
            ),
          otherwise: (schema) =>
            schema.min(
              currentDate.getFullYear(),
              `Valor do campo deve ser pelo menos igual a ${currentDate.getFullYear()}`
            )
        })
        .required("Campo obrigatório")
    }),
    onSubmit: (values) => {
      console.log(values); //

      const products = cartItems.map(({ id, preco: price }) => ({ id, price }));

      checkoutPurchase({
        products,
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.postalCode,
            number: +values.number,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: +values.verificationCode,
            expires: {
              month: +values.expirationMonth,
              year: +values.expirationYear
            }
          }
        }
      });

      dispatch(removeAllItemsFromCart());
      dispatch(setCloseable(true));
    }
  });

  useEffect(() => {
    dispatch(setCloseable(!formik.dirty));
  }, [formik.dirty, dispatch]);

  type FieldName = keyof typeof formik.values;
  const [hoveredField, setHoveredField] = useState<FieldName | undefined>();

  const handleBackToCart = () => {
    dispatch(setCloseable(true));
    dispatch(changeElementToRender("cart"));
  };

  const handleMouseOver = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    setHoveredField(e.currentTarget.name as FieldName);
  };

  const handleMouseOut = () => {
    setHoveredField(undefined);
  };

  const checkIfFieldHasError = (inputName: FieldName): boolean => {
    return formik.errors[inputName] && formik.touched[inputName] ? true : false;
  };

  const AlertIcon = ({ inputName }: { inputName: FieldName }) =>
    checkIfFieldHasError(inputName) && (
      <FiAlertTriangle size="16px" color={colors.black} />
    );

  const totalPrice = formatPrice(getTotalPrice(cartItems));

  if (isSuccess) return <OrderConfirmationMessage orderId={data.orderId} />;
  if (isLoading) return <Spinner color="light" fullHeight />;

  return (
    <s.Form onSubmit={formik.handleSubmit}>
      <div className={formPage === 2 ? "hidden" : ""}>
        <h4>Entrega</h4>
        <s.InputContainer>
          <label htmlFor="receiver">Quem irá receber</label>
          <input
            className={checkIfFieldHasError("receiver") ? "error" : ""}
            type="text"
            id="receiver"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            {...formik.getFieldProps("receiver")}
          />
          <AlertIcon inputName="receiver" />
        </s.InputContainer>
        <s.InputContainer>
          <label htmlFor="address">Endereço</label>
          <input
            className={checkIfFieldHasError("address") ? "error" : ""}
            type="text"
            id="address"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            {...formik.getFieldProps("address")}
          />
          <AlertIcon inputName="address" />
        </s.InputContainer>
        <s.InputContainer>
          <label htmlFor="city">Cidade</label>
          <input
            className={checkIfFieldHasError("city") ? "error" : ""}
            type="text"
            id="city"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            {...formik.getFieldProps("city")}
          />
          <AlertIcon inputName="city" />
        </s.InputContainer>
        <GridContainer gap>
          <s.InputContainer>
            <label htmlFor="postalCode">CEP</label>
            <InputMask
              className={checkIfFieldHasError("postalCode") ? "error" : ""}
              type="text"
              id="postalCode"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              mask="_____-___"
              replacement={maskReplacement}
              {...formik.getFieldProps("postalCode")}
            />
            <AlertIcon inputName="postalCode" />
          </s.InputContainer>
          <s.InputContainer>
            <label htmlFor="number">Número</label>
            <InputMask
              className={checkIfFieldHasError("number") ? "error" : ""}
              type="text"
              id="number"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              mask="______"
              replacement={maskReplacement}
              {...formik.getFieldProps("number")}
            />
            <AlertIcon inputName="number" />
          </s.InputContainer>
        </GridContainer>
        <s.InputContainer>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            className={checkIfFieldHasError("complement") ? "error" : ""}
            type="text"
            id="complement"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            {...formik.getFieldProps("complement")}
          />
          <AlertIcon inputName="complement" />
        </s.InputContainer>
        <Button type="button" width="100%" onClick={() => setFormPage(2)}>
          Continuar com o pagamento
        </Button>
        <Button type="button" width="100%" onClick={handleBackToCart}>
          Voltar para o carrinho
        </Button>
      </div>

      <div className={formPage === 1 ? "hidden" : ""}>
        <h4>Pagamento (valor a pagar: {totalPrice})</h4>
        <s.InputContainer>
          <label htmlFor="cardOwner">Nome no cartão</label>
          <input
            className={checkIfFieldHasError("cardOwner") ? "error" : ""}
            type="text"
            id="cardOwner"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            {...formik.getFieldProps("cardOwner")}
          />
          <AlertIcon inputName="cardOwner" />
        </s.InputContainer>
        <GridContainer columns={["228px", "auto"]} gap>
          <s.InputContainer>
            <label htmlFor="cardNumber">Número do cartão</label>
            <InputMask
              className={checkIfFieldHasError("cardNumber") ? "error" : ""}
              type="text"
              id="cardNumber"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              mask="____ ____ ____ ____"
              replacement={maskReplacement}
              {...formik.getFieldProps("cardNumber")}
            />
            <AlertIcon inputName="cardNumber" />
          </s.InputContainer>
          <s.InputContainer>
            <label htmlFor="verificationCode">CVV</label>
            <InputMask
              className={
                checkIfFieldHasError("verificationCode") ? "error" : ""
              }
              type="text"
              id="verificationCode"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              mask="___"
              replacement={maskReplacement}
              {...formik.getFieldProps("verificationCode")}
            />
            <AlertIcon inputName="verificationCode" />
          </s.InputContainer>
        </GridContainer>
        <GridContainer gap>
          <s.InputContainer>
            <label htmlFor="expirationMonth">Mês de vencimento</label>
            <InputMask
              className={checkIfFieldHasError("expirationMonth") ? "error" : ""}
              type="text"
              id="expirationMonth"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              mask="__"
              replacement={maskReplacement}
              {...formik.getFieldProps("expirationMonth")}
            />
            <AlertIcon inputName="expirationMonth" />
          </s.InputContainer>
          <s.InputContainer>
            <label htmlFor="expirationYear">Ano de vencimento</label>
            <InputMask
              className={checkIfFieldHasError("expirationYear") ? "error" : ""}
              type="text"
              id="expirationYear"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              mask="____"
              replacement={maskReplacement}
              {...formik.getFieldProps("expirationYear")}
            />
            <AlertIcon inputName="expirationYear" />
          </s.InputContainer>
        </GridContainer>
        <Button type="submit" width="100%">
          Finalizar pagamento
        </Button>
        <Button type="button" width="100%" onClick={() => setFormPage(1)}>
          Voltar para a edição de endereço
        </Button>
      </div>
      {hoveredField && checkIfFieldHasError(hoveredField) && (
        <s.ErrorMessage>{formik.errors[hoveredField]}</s.ErrorMessage>
      )}
    </s.Form>
  );
}
