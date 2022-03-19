import Image from 'next/image';
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

function add({ db_host, db_user, db_pass }) {
  return (
    <center>
      <div class="card-center">
        <div class="card-header">
          <div class="card-body">
            <div id="formContent">
              <span className='Title2'>บันทึกข้อมูลผู้เช่า</span>
              <center>
                <div class='container'>

                  <form class="row g-3">

                    <div class="col-mb-6">
                      <p className='หมายเลข'>
                        <label for="numberroom" class="form-label">หมายเลขห้อง</label>
                        <input type="text" class="form-control" id="numberroom" aria-describedby="numberroom"/>
                      </p>
                    </div>

                    <div class="col-md-6">
                      <p className='ชื่อ'>
                        <label for="name" class="form-label">ชื่อผู้เช่า</label>
                        <input type="text" class="form-control" id="name" aria-describedby="name" />
                      </p>
                    </div>

                    <div class="col-md-6">
                      <p className='นามสกุล'>
                        <label for="lastname" class="form-label">นามสกุลผู้เช่า</label>
                        <input type="text" class="form-control" id="lastname" aria-describedby="lastname" />
                      </p>
                    </div>

                    <div class="col-12">
                      <p className='ที่อยู่'>
                        <label for="address" class="form-label">ที่อยู่</label>
                        <input type="text" class="form-control" id="address" aria-describedby="address" />
                      </p>
                    </div>

                    <div class="col-md-6">
                      <p className='เบอร์'>
                        <label for="phone" class="form-label">เบอร์โทร</label>
                        <input type="text" class="form-control" id="phone" aria-describedby="phone" />
                      </p>
                    </div>

                    <div class="col-md-2">
                      <p className='เพศ'>
                        <label for="gender" class="form-label">เพศ</label>
                        <input type="text" class="form-control" id="gender" aria-describedby="gender" />
                      </p>
                    </div>

                    <div class="col-md-3">
                      <p className='วันที่'>
                        <label for="date_start" class="form-label">วันที่เช่า</label>
                        <input type="text" class="form-control" id="date_start" aria-describedby="date_start" />
                      </p>
                    </div>

                    <p className='บันทึก'>
                      <button type="submit" class="btn btn-primary">บันทึกข้อมูล</button>
                    </p>

                  </form>

                </div> </center>         
              </div>
          </div>
        </div>
      </div>
      <style>{`
      
      
      #formContent {
        -webkit-border-radius: 20px 20px 20px 20px;
        border-radius: 20px 20px 20px 20px;
        background: #fff;
        padding: 30px;
        width: 100%;
        max-width: 800px;
        position: relative;
        padding: 25px;
        -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
        box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
        
      }

      div {
          text-align: center;
      }
      
      .Title2 {
        font-size: 50px;
        font-family: 'Kanit', sans-serif;
      }
      
      .หมายเลข {
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
        text-align: left
      }
      
      .ชื่อ {
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
        text-align: left
      }
      
      .นามสกุล {
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
        text-align: left
      }
      
      .เพศ {
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
        text-align: left
      }
      
      .เบอร์ {
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
        text-align: left
      }

      .ที่อยู่ {
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
        text-align: left
      }

      .วันที่ {
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
        text-align: left
      }
      
      .บันทึก {
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
      }

  `}</style>
    </center>

  )
}

export default add