import { Oval } from 'react-loader-spinner';

export const Loader = () => (
  <Oval
    height={100}
    width={100}
    color="#4fa94d"
    wrapperStyle={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '200px',
      // marginTop: '200px',
    }}
    wrapperClass=""
    visible={true}
    ariaLabel="oval-loading"
    secondaryColor="#4fa94d"
    strokeWidth={4}
    strokeWidthSecondary={2}
  />
);
