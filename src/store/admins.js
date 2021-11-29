import { computed } from 'nanostores';

import { users } from './users.js';

export const admins = computed(users, (list) => list.filter((user) => user.isAdmin));
