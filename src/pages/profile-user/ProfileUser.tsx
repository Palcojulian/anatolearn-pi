import { useNavigate } from "react-router";
import { useAuthUser } from "../log-in/composables/useAuthUser";

const ProfileUser = () => {
  const { userLooged } = useAuthUser();

  return (
    <div>
      <h1>
        {userLooged?.displayName} - {userLooged?.email}
      </h1>
    </div>
  );
};

export default ProfileUser;
