import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import '../css/Loading.css';
export const Loading = (loading, color, size) => <div className='react-loader'><ClimbingBoxLoader size={size} color={color} loading={loading} /></div>