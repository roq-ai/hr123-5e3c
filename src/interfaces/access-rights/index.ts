import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AccessRightsInterface {
  id?: string;
  user_id?: string;
  access_level: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface AccessRightsGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
