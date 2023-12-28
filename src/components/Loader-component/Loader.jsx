import { Oval } from 'react-loader-spinner';

export const Loader = () => (
  <Oval
    height={100}
    width={100}
    color="#4fa94d"
    wrapperStyle={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      margin: 'auto',
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // paddingTop: '200px',
      // // marginTop: '200px',
    }}
    wrapperClass=""
    visible={true}
    ariaLabel="oval-loading"
    secondaryColor="#4fa94d"
    strokeWidth={4}
    strokeWidthSecondary={2}
  />
);
