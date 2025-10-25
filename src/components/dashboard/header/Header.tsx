import { useUserStore } from '../../../store/userStore'
import { UserAvatar } from '../../avatar/UserAvatar'
import { Notifications } from '../notifications/Notifications'

export function Header() {
    const { user } = useUserStore()

    return (
        <div className="flex justify-between items-center mb-10 px-0 pt-8">
            <div className="flex items-center gap-4">
                <Notifications />
                <UserAvatar name={user.name} size={30} />
            </div>
        </div>
    )
}
