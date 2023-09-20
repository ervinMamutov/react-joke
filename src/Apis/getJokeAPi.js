import axios from 'axios';
import data from '../data/data';
const getJokeApi = async () => {
  const encodingUrl = encodeURI(data.baseUrl);
  try {
    const res = await axios.get(encodingUrl);
    if (res.status === 200) {
      const flags = res.data.flags;
      if (flags.nsfw || flags.religious || flags.racist || flags.sexist) {
        return;
      } else {
        return {
          ok: true,
          data: res.data,
        };
      }
    } else {
      throw new Error(`Failed fetch a joke status: ${res.status} `);
    }
  } catch (err) {
    return {
      err: err,
      ok: false,
    };
  }
};

export default getJokeApi;
