import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard.js';
import Profile from './pages/profile.js'
import Register from './pages/registration.js'
import HostStudent from './pages/registerationForm/hostStudent.js';
import HostFaculty from './pages/registerationForm/hostFaculty.js';
import HostAlumini from './pages/registerationForm/hostAlumini.js';
import Entrepreneur from './pages/registerationForm/entrepreneurs.js';
import OtherStudent from './pages/registerationForm/otherStudent.js';
import OtherFaculty from './pages/registerationForm/otherFaculty.js';
import SchoolLearner from './pages/registerationForm/schoolLearner.js';
import SchoolTeacher from './pages/registerationForm/schoolTeacher.js';
import Industry from './pages/registerationForm/industry.js';
import ScheduleVisit from './pages/bookingForm/scheduleVisit.js';
import WorkOrder from './pages/bookingForm/workOrder.js';
import EquipmentReservation from './pages/bookingForm/equipmentReservation.js';
import SeedFundApplication from './pages/bookingForm/seedFundApplication.js';
import NoPage from './pages/noPage.js'
import Home from './pages/home.js';
import Admin from './pages/admin.js';
import ScheduleVisitAdmin from './pages/admin/ScheduleVisitAdmin.js';
import EquipmentReservationAdmin from './pages/admin/equipmentReservationAdmin.js';
import SeedFundApplicationAdmin from './pages/admin/seedFundApplicationAdmin.js';
import WorkOrderAdmin from './pages/admin/workOrderAdmin.js';
import AdminLogin from './pages/admin/login.js';
import AdminUser from './pages/admin/profile.js';
import AdminHostStudent from './pages/admin/overall/hostStudent.js';
import AdminHostFaculty from './pages/admin/overall/hostFaculty.js';
import AdminAlumini from './pages/admin/overall/alumini.js';
import AdminOtherStudent from './pages/admin/overall/otherStudent.js';
import AdminOtherFaculty from './pages/admin/overall/otherFaculty.js';
import AdminEntrepreneur from './pages/admin/overall/entrepreneur.js';
import AdminSchoolLearner from './pages/admin/overall/schoolLearner.js';
import AdminSchoolTeacher from './pages/admin/overall/schoolTeacher.js';
import AdminIndustry from './pages/admin/overall/industry.js';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/register/hoststudent' element={<HostStudent/>}/>
        <Route path='/register/hostfaculty' element={<HostFaculty/>}/>
        <Route path='/register/hostalumini' element={<HostAlumini/>}/>
        <Route path='/register/entrepreneur' element={<Entrepreneur/>}/>
        <Route path='/register/otherstudent' element={<OtherStudent/>}/>
        <Route path='/register/otherfaculty' element={<OtherFaculty/>}/>
        <Route path='/register/schoollearner' element={<SchoolLearner/>}/>
        <Route path='/register/Schoolteacher' element={<SchoolTeacher/>}/>
        <Route path='/register/industry' element={<Industry/>}/>
        <Route path='/schedulevisit' element={<ScheduleVisit/>}/>
        <Route path='/Workorder' element={<WorkOrder/>}/>
        <Route path='/equipmentreservation' element={<EquipmentReservation/>}/>
        <Route path='/seedfundapplication' element={<SeedFundApplication/>}/>
        <Route path='/admin/dashboard' element={<Admin/>}/>
        <Route path='/admin/schedulevisit' element={<ScheduleVisitAdmin/>}/>
        <Route path='/admin/equipmentreservation' element={<EquipmentReservationAdmin/>}/>
        <Route path='/admin/workorder' element={<WorkOrderAdmin/>}/>
        <Route path='/admin/seedfundapplication' element={<SeedFundApplicationAdmin/>}/>
        <Route path='/admin/userinfo/:email' element={<AdminUser/>}/>
        <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='/admin/hoststudent' element={<AdminHostStudent/>}/>
        <Route path='/admin/hostfaculty' element={<AdminHostFaculty/>}/>
        <Route path='/admin/alumini' element={<AdminAlumini/>}/>
        <Route path='/admin/otherstudent' element={<AdminOtherStudent/>}/>
        <Route path='/admin/otherfaculty' element={<AdminOtherFaculty/>}/>
        <Route path='/admin/entrepreneur' element={<AdminEntrepreneur/>}/>
        <Route path='/admin/schoollearner' element={<AdminSchoolLearner/>}/>
        <Route path='/admin/schoolteacher' element={<AdminSchoolTeacher/>}/>
        <Route path='/admin/industry' element={<AdminIndustry/>}/>
        <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;