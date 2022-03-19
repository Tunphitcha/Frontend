import { gql, useQuery } from "@apollo/client";

const SOME_USER_QUERY = gql`
query someUserQuery($numroom: String) {
    user(numroom: $numroom) {
      numroom
      name
      last
      gender
      phone
      address
      date
    }
  }
`;

const SomeUser = () => {

    const { data, loading, error } = useQuery(SOME_USER_QUERY);

    if (loading) return <div>loading...</div>
    if (error) return <pre>Bad: {error.graphQLErrors.map(({ message }, i) => (
        <span key={i}>{message}</span>
      ))}
    </pre>

    const { user } = data;

    return (
        <div>
            {
                user.map((numroom, name, last, gender, phone, address, date) => {
                    <div key={numroom}>
                        numroom: {numroom}
                        name: {name}
                        last: {last}
                        gender: {gender}
                        phone: {phone}
                        address: {address}
                        date: {date}
                    </div>
                })
            }
        </div>
    );
};

export default SomeUser;
