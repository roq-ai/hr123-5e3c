const mapping: Record<string, string> = {
  'access-rights': 'access_rights',
  employees: 'employee',
  organizations: 'organization',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
