import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import BlenderIcon from "@mui/icons-material/Blender";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import ConstructionIcon from "@mui/icons-material/Construction";
import WorkIcon from "@mui/icons-material/Work";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import realEstateImg from '../../assets/moblieMenuImages/real-estate.png';
import vehiclesImg from '../../assets/moblieMenuImages/vehicles.png';
import electronicDevicesImg from '../../assets/moblieMenuImages/electronic-devices.png';
import homeKitchenImg from '../../assets/moblieMenuImages/home-kitchen.png';
import servicesImg from '../../assets/moblieMenuImages/services.png';
import personalImg from '../../assets/moblieMenuImages/personal.png';
import leisureHobbiesImg from '../../assets/moblieMenuImages/leisure-hobbies.png';
import toolsEquipmentImg from '../../assets/moblieMenuImages/tools-materials-equipment.png';
import jobsImg from '../../assets/moblieMenuImages/jobs.png'
export const categories = [
  { id: 1, title: 'املاک', icon: HomeIcon  , image :  realEstateImg },
  { id: 2, title: 'وسایل نقلیه', icon: DirectionsCarIcon  ,   image : vehiclesImg},
  { id: 3, title: 'کالای دیجیتال', icon: PhoneAndroidIcon  , image :  electronicDevicesImg },
  { id: 4, title: 'خانه و آشپزخانه', icon: BlenderIcon  , image :  homeKitchenImg },
  { id: 5, title: 'خدمات', icon: MedicalServicesIcon  , image : servicesImg},
  { id: 6, title: 'وسایل شخصی', icon: SportsBasketballIcon  ,   image :personalImg },
  { id: 7, title: 'سرگرمی', icon: ConstructionIcon  ,image :  leisureHobbiesImg },
  { id: 8, title: 'تجهیزات صنعتی', icon: WorkIcon  , image : toolsEquipmentImg},
  { id: 9, title: 'استخدام و کاریابی', icon: PermIdentityIcon  ,   image :jobsImg },
];


