import { useEffect, useState } from 'react'
import '../assets/styles/profile.css'
import HostStudent from '../components/profile/hostStudent'
import Complete from '../components/profile/complete'
import HostFaculty from '../components/profile/hostFaculty'
import Alumini from '../components/profile/alumini'
import OtherStudent from '../components/profile/otherStudent'
import OtherFaculty from '../components/profile/otherFaculty'
import Entrepreneur from '../components/profile/entrepreneur'
import SchoolLearner from '../components/profile/schoolLearner'
import SchoolTeacher from '../components/profile/schoolTeacher'
import Industry from '../components/profile/industry'
import { useNavigate } from 'react-router-dom'

function Profile() {

  const navigate = useNavigate();

  useEffect(()=>{
    if(!JSON.parse(localStorage.getItem('userInformation'))){
      navigate("/");
    };
  }, []);

  const [value, setvalue] = useState('');

  useEffect(() => {
    setvalue(JSON.parse(localStorage.getItem("userInformation")))
  }, []);


  const showprofile = () => {
    switch (value.table) {
      case "hoststudent" :
        return (<HostStudent />);

      case "hostinstitutefaculty":
        return (<HostFaculty />);

      case "alumini":
        return (<Alumini />);

      case "otherstudent":
        return (<OtherStudent />);

      case "otherfaculty":
        return (<OtherFaculty />);

      case "startup":
        return (<Entrepreneur />);

      case "schoolstudents":
        return (<SchoolLearner />);

      case "schoolteacher":
        return (<SchoolTeacher />);

      case "industry":
        return (<Industry />);

      default:
        return (<Complete />);

    }
  }



  return (
    <>
      <div>{showprofile()}</div>

    </>
  )
}

export default Profile;