import Link from 'next/link'

const Header = () => {
  return (
    <ul>
      <span className='index'>
        <Link href="/">
          <button type="button" class="btn btn-danger btn-md">หน้าหลัก</button>
        </Link>
      </span>&nbsp;

      <span className='save'>
        <Link href="/AddUser">
          <button type="button" class="btn btn-success btn-md">บันทึกข้อมูลผู้เช่า</button>
        </Link>
      </span>&nbsp;

      <span className='AllUser'>
        <Link href="/AllUser">
          <button type="button" class="btn btn-primary btn-md">ข้อมูลผู้เช่าทั้งหมด</button>
        </Link>
      </span>&nbsp;

      <style>{`
      div {
          text-align: left;
      }

      .index {
        font-size: 40px;
        font-family: 'Sarabun', sans-serif;
      }
      .save {
        font-size: 40px;
        font-family: 'Sarabun', sans-serif;
      }
      .AllUser{
        font-size: 40px;
        font-family: 'Sarabun', sans-serif;
      }


      `}</style>
    </ul>
  )
}

export default Header