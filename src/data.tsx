import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter
} from "react-icons/ti";

import { colors } from "./global-style";

type Data = {
  socialLinks: SocialLink[];
};

const data: Data = {
  socialLinks: [
    {
      icon: <TiSocialInstagram size="16px" color={colors.salmon} />,
      url: "https://instagram.com",
      title: "Instagram"
    },
    {
      icon: <TiSocialFacebook size="16px" color={colors.salmon} />,
      url: "https://facebook.com",
      title: "Facebook"
    },
    {
      icon: <TiSocialTwitter size="16px" color={colors.salmon} />,
      url: "https://twitter.com",
      title: "Twitter"
    }
  ]
};

export default data;
