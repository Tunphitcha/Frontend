import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import swal from 'sweetalert';

const Add_Mutation = gql`
mutation AddUser($numroom: String, $name: String, $last: String, $address: String, $phone: String, $gender: String, $date: String) {
    addUser(numroom: $numroom, name: $name, last: $last, address: $address, phone: $phone, gender: $gender, date: $date) {
      numroom
      name
      last
      address
      phone
      gender
      date
    }
  }
`;

const add = () => {
  const [AddUser, { data, loading, error }] = useMutation(Add_Mutation);
  const [numroom, setNumroom] = useState("");
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  if (loading) return <div>loading...</div>;
  if (error) return <div>`Error: {error.message}`</div>

  return (
    <center>
      <br></br>
      <br></br>
      <div id="formContent">

        <p className='Title2'>บันทึกข้อมูลผู้เช่า</p>

        <center>
          <div class='container'>
            <form class="row g-3">

              <div class="col-mb-6">
                <p className='numberroom'>
                  <label for="numberroom" class="form-label">หมายเลขห้อง</label>
                  <input class="form-control" id="numberroom" aria-describedby="numberroom" autocomplete="off"
                    onChange={async (e) => {
                      e.preventDefault();
                      setNumroom(e.target.value);
                    }} />
                </p>
              </div>

              <br></br>

              <div class="col-md-6">
                <p className='name'>
                  <label for="name" class="form-label">ชื่อผู้เช่า</label>
                  <input type="text" class="form-control" id="name" aria-describedby="name" autocomplete="off"
                    onChange={async (e) => {
                      e.preventDefault();
                      setName(e.target.value);
                    }} />
                </p>
              </div>

              <br></br>

              <div class="col-md-6">
                <p className='lastname'>
                  <label for="lastname" class="form-label">นามสกุลผู้เช่า</label>
                  <input type="text" class="form-control" id="lastname" aria-describedby="lastname"autocomplete="off"
                    onChange={async (e) => {
                      e.preventDefault();
                      setLast(e.target.value);
                    }} />
                </p>
              </div>

              <br></br>

              <div class="col-12">
                <p className='address'>
                  <label for="address" class="form-label">ที่อยู่</label>
                  <input class="form-control" id="address" aria-describedby="address" autocomplete="off"
                    onChange={async (e) => {
                      e.preventDefault();
                      setAddress(e.target.value);
                    }} />
                </p>
              </div>

              <br></br>

              <div class="col-md-6">
                <p className='phone'>
                  <label for="phone" class="form-label">เบอร์โทร</label>
                  <input class="form-control" id="phone" aria-describedby="phone" autocomplete="off"
                    onChange={async (e) => {
                      e.preventDefault();
                      setPhone(e.target.value);
                    }} />
                </p>
              </div>

              <br></br>

              <div class="col-md-2">
                <p className='gender'>
                  <label for="gender" class="form-label">เพศ</label>
                  <input type="text" class="form-control" id="gender" aria-describedby="gender" autocomplete="off"
                    onChange={async (e) => {
                      e.preventDefault();
                      setGender(e.target.value);
                    }} />
                </p>
              </div>

              <br></br>

              <div class="col-md-3">
                <p className='date_start'>
                  <label for="date_start" class="form-label">วันที่เช่า</label>
                  <input class="form-control" id="date_start" aria-describedby="date_start" autocomplete="off"
                    onChange={async (e) => {
                      e.preventDefault();
                      setDate(e.target.value);
                    }} />
                </p>
              </div>

              <br></br>

              <p className='submit'>
                <button type="submit" class="btn btn-primary" onClick={async (e) => {
                  e.preventDefault();
                  AddUser({ variables: { numroom: numroom, name: name, last: last, address: address, phone: phone, gender: gender, date: date } });
                  swal({
                    title: "ยืนยันการบันทึกข้อมูล",
                    icon: "warning",
                    buttons: ['ยกเลิก', 'ยืนยัน'],
                    dangerMode: true,
                  })
                    .then(willDelete => {
                      if (willDelete) {
                        swal({
                          title: "บันทึกข้อมูลสำเร็จ",
                          icon: "success",
                          buttons: {
                            text: "ตกลง"
                          }
                        });
                      }
                    });
                }}>บันทึกข้อมูล</button>
              </p>
            </form>
          </div>
        </center>

      </div>

      <style>{`
      
      #formContent {
        -webkit-border-radius: 20px 20px 20px 20px;
        border-radius: 20px 20px 20px 20px;
        background: #fff;
        padding: 15px;
        width: 100%;
        max-width: 800px;
        box-shadow: 0 25px 60px 0 rgba(0,0,0,0.3);
        
      }
      
      div {
          text-align: left;
      }
      
      .Title2 {
        font-size: 50px;
        font-family: 'Kanit', sans-serif;
        text-align: center
      }
      
      .numberroom {
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
        text-align: left
      }
      
      .name {
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
        text-align: left
      }
      
      .lastname {
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
        text-align: left
      }
      
      .gender {
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
        text-align: left
      }
      
      .phone {
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
        text-align: left
      }

      .address {
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
        text-align: left
      }

      .date_start {
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
        text-align: left
      }
      
      .submit {
        font-size: 16px;
        font-family: 'Sarabun', sans-serif;
        text-align: center
      }

      .swal-button {
        font-family: 'Sarabun', sans-serif;
      }

      .swal-title{
        font-family: 'Sarabun', sans-serif;
      }
  `}</style>
    </center>
  );
};

export default add;
