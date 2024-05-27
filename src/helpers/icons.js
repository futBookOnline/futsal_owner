import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faEye,
  faEyeSlash,
  faHouse,
  faGear,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";

const iconLibrary = library.add(faEyeSlash, faEye, faHouse, faGear, faReceipt);

export default iconLibrary;
