
import Academic from "../screen/AcademicsPage";
import CareerPath from "../screen/CareerPathPage";
import Chatscreen from "../screen/Chatscreen";
import Details from "../screen/DetailsPage";
import ExamDetail from "../screen/ExamDetails";
import HomePage from "../screen/HomePage";
import Login from "../screen/LoginPage";
import SigninPage from "../screen/SigninPage";
import Splashscreen from "../screen/Splashscreen";
import PhoneAuthPage from '../screen/PhoneAuthPage';
import OtpScreen from "../screen/OtpScreen";
import ErrorPage from "../screen/404";

const route = {
    HOME : HomePage,
    LOGIN : Login,
    SIGNIN : SigninPage,
    DETAILSPAGE : Details,
    ACADEMICS : Academic,
    CAREER : CareerPath, 
    SPLASH : Splashscreen,
    CHATSCREEN : Chatscreen,
    EXAMDETAIL : ExamDetail,
    PHONE : PhoneAuthPage,
    OTP : OtpScreen,
    ERROR : ErrorPage 
};

export default route;