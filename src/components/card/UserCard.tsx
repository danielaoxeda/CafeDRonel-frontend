import { useUserStore } from '../../store/userStore'
import { UserAvatar } from '../avatar/UserAvatar'

export default function UserCard() {
    const { user } = useUserStore()

    return (
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 text-center">
            <UserAvatar name={user.name} size={80} />
            <div className="text-center mt-4">
                <p className="font-semibold text-lg">{user.name}</p>
                {user.email && <p className="text-gray-600 text-sm">{user.email}</p>}
                {user.phone && <p className="text-gray-600 text-sm">{user.phone}</p>}
            </div>
        </div>
    )
}
