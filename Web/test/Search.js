import { gql, useQuery } from "@apollo/client";

const SOME_USER_QUERY = gql`
query someUserQuery
{
    user(numroom: String!){
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
    if (error) return <p>Error:(</p>

    const { user } = data;
    return (
        <center>
             <div id="formContent">
            <div class="container">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">หมายเลขห้อง</th>
                            <th scope="col">ชื่อผู้เช่า</th>
                            <th scope="col">นามสกุลผู้เช่า</th>
                            <th scope="col">ที่อยู่</th>
                            <th scope="col">เบอร์โทร</th>
                            <th scope="col">เพศ</th>
                            <th scope="col">วันที่เช่า</th>
                        </tr>
                    </thead>
                    {
                        data.user.map(({ numroom, name, last, address, phone, gender, date }) => (
                            <tbody>
                                <tr>
                                    <td>
                                        {numroom}
                                    </td>
                                    <td>
                                        {name}
                                    </td>
                                    <td>
                                        {last}
                                    </td>
                                    <td>
                                        {address}
                                    </td>
                                    <td>
                                        {phone}
                                    </td>
                                    <td>
                                        {gender}
                                    </td>
                                    <td>
                                        {date}
                                    </td>
                                </tr>

                            </tbody>
                        ))
                    }
                </table>
                <style>{`

                    div {
                        font-family: 'Kanit', sans-serif;
                        text-align: left;
                        font-size: 20px;
                        }
                    table {
                        text-align: center;
                    }
                    table.table-bordered{
                        margin-top:20px;
                      }

                    table.table-bordered > thead > tr > th{
                        border:2px solid #bdbdbd;
            
                    }
                    table.table-bordered > tbody > tr > td{
                        border:2px solid #bdbdbd;
                        font-family: 'Sarabun', sans-serif;
                        font-size: 16px;
                    }

                    #formContent {
                        -webkit-border-radius: 20px 20px 20px 20px;
                        border-radius: 20px 20px 20px 20px;
                        background: #fff;
                        padding: 15px;
                        width: 100%;
                        max-width: 1300px;
                        box-shadow: 0 25px 60px 0 rgba(0,0,0,0.3);
                        
                      }

            `}</style>

            </div>
            </div>
        </center>
    );
};

export default SomeUser;