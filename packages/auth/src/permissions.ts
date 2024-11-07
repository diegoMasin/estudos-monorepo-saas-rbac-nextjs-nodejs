import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { User } from './models/user'
import { Role } from './roles'

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN: (user, { can, cannot }) => {
    can('manage', 'all') // pode tudo na aplicação
    // contudo não pode transferir o proprietário de uma organização a qual ele nem pertence nem é dono
    // em cannot não é possível usar condicional (poderia criar uma de "não-igual" mas não funciona )
    cannot(['transfer_ownership', 'update'], 'Organization')
    // mas ele pode transferir o proprietário de uma organização caso ele seja dono da mesma
    can(['transfer_ownership', 'update'], 'Organization', {
      ownerId: { $eq: user.id },
    })
  },
  MEMBER: (user, { can }) => {
    can('get', 'User')
    can(['create', 'get'], 'Project')
    can(['update', 'delete'], 'Project', { ownerId: { $eq: user.id } })
  },

  BILLING: (_, { can }) => {
    can('manage', 'Billing')
  },
}
