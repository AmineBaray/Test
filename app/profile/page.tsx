import EmptyState from "@/app/components/elementsUi/EmptyState";
import ClientOnly from "@/app/components/elementsUi/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import ProfilePage from "./Profileclient";

const Profile = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly> 
        <EmptyState
          title="Unauthorized"
          subtitle="Please login"
        />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <ProfilePage/>
    </ClientOnly>
  );
}
 
export default Profile;