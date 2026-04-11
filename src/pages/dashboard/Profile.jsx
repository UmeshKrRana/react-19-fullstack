import { useAuth } from "../../context/AuthContext";

export const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-xl bg-white shadow rounded p-6">
      <h2 className="text-xl font-semibold mb-4">My Profile</h2>

      <div className="space-y-3">
        <div>
          <p className="text-gray-500 text-sm">Name</p>
          <p className="font-medium">{user.name}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Email</p>
          <p className="font-medium">{user.email}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Account Created</p>
          <p className="font-medium">
            {new Date(user.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};
