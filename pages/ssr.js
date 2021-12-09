const Ssr = ({ randomNumber }) => <div>{randomNumber}</div>

export const getServerSideProps = async (context) => {
  return {
    props: {
      randomNumber: Math.random()
    }
  }
}

export default Ssr;