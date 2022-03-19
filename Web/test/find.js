import Image from 'next/image'
import { gql, useQuery } from "@apollo/client";

export const getStaticProps = async () => {
    console.log(process.env.DB_HOST)
    return {
        props: {
            db_host: process.env.DB_HOST,
            db_user: process.env.DB_USER,
            db_pass: process.env.DB_PASS,
        }
    }
}
function find({ db_host, db_user, db_pass }) {
    return (
        <center>
            <div class="card-header">
                <div class="card-center">

                    <div class="card-body">

                        <div id="formContent">
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>   
                            <br></br>
                            <p className='Title3'>ค้นหาข้อมูลผู้เช่า</p>
                            <div class="container">
                                <form>
                                    <div class="mb-3">
                                        <label for="numroom" class="form-label"></label>
                                        <p className='ช่อง'>
                                            <input type="text" class="form-control" id="numroom" aria-describedby="numroom" placeholder="หมายเลขห้อง" />
                                        </p>
                                    </div>
                                    <p className='ค้นหา'>
                                        <button type="submit" class="btn btn-primary btn-md">ค้นหา</button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
      div {
          text-align: center;
      }

      #formContent {
        -webkit-border-radius: 20px 20px 20px 20px;
        border-radius: 20px 20px 20px 20px;
        background: #fff;
        padding: 30px;
        width: 100%;
        max-width: 550px;
        height: 588px;
        position: relative;
        padding: 25px;
        -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
        box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
        
      }

      .Title3 {
        font-size: 50px;
        font-family: 'Kanit', sans-serif;
        
      }

      .ค้นหา {
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
      }

      .ช่อง {
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
      }
      `}</style>
        </center>

    )
}

export default find