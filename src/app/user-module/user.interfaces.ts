
/**
 * Данные по пользователю
 */
export interface IUser {
  id: string,
  name: string,
  avatarUrl: string
}

/**
 * Ответ с бэка на получение списка контактов
 */
export interface IUserListResponse {
  result: IUser[],
  nextPageUrl?: string,
  previousPageUrl?:string
}
