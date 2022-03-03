import axios from 'axios';
import publicIp from 'public-ip';

let pubIp = '';
(async () => {
  pubIp = await publicIp.v4();
})();

export default (payload, type) => {
  axios
    .post(
      `${process.env.NEXT_PUBLIC_APP_API}/api/v5/public/${window.location.pathname.replace(
        /^\/([^\/]*).*$/,
        '$1'
      )}/trackers`,
      {
        ip_address: pubIp,
        name: payload,
        type: type,
      }
    )
    .then((response) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};
