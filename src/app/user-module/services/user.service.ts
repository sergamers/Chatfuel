import { Injectable } from '@angular/core';
import { IUserListResponse, IUser } from '@app/user-module/user.interfaces';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor() { }

  /**
   * public getUserList - Получаем список контактов
   *
   * @param  {type} page Номер страницы
   */
  public getUserList(page: number = 0): Observable<IUserListResponse> {
    // в реале здесь должен быть this.http.get(API)
    return this.generateCustomRequestListUser(page);
  }

  /**
   * public autocompliteUser - Поиск клиента по имени
   *
   * @param  {type} query Поисковая строка
   */
  public autocompliteUser(query: string): Observable<IUser[]>{
    // в реале здесь должен быть this.http.get(API)
    return this.customAutocompliteSearh(query);
  }



  /**
   * Сохраняем новые данные пользователя     
   */
  public updateUser(user: IUser): Observable<IUser> {
    let param = {
      name: user.name,
      avatarUrl: user.avatarUrl,
    };

    // в реале здесь должен быть this.http.post(API, param)
    return this.customSetUser(user.id, param);
  }

  /**
   * public getUser - Получаем клиента по ID
   *
   * @param  {type} id
   */
  public getUser(id: string): Observable<IUser> {
    // в реале здесь должен быть this.http.get(API)
    return this.customUserId(id).map((users: IUser[]) => users.length ? users[0] : undefined);
  }

  /**
   * private generateCustomRequestListUser - Кастомная генерация бэк ответа
   *
   * @param  {type} page Номер страницы
   */
  private generateCustomRequestListUser(page: number): Observable<IUserListResponse> {
    let max = 10;

    let result: IUser[] = UserList.slice(max * page, max * page + max);

    let nextPageUrl: string = UserList.length > max * page + max ? (page + 1).toString() : undefined;

    let previousPageUrl: string = page > 0 ? (page - 1).toString() : undefined;

    let response: IUserListResponse = {
      result,
      nextPageUrl,
      previousPageUrl
    };

    // имитация ответа angular на запрос http.get
    return Observable.create(( observer ) => {
      observer.next(response);
    });
  }

  /**
   * private customAutocompliteSearh - Кастомная реализация запроса на бэк на автокомплит
   *
   * @param  {type} query Поисковая строка
   */
  private customAutocompliteSearh(query: string): Observable<IUser[]> {
    var response: IUser[] = UserList.filter(( user ) => {
      return user.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1;
    });

    // имитация ответа angular на запрос http.get
    return Observable.create(( observer ) => {
      observer.next(response);
    });
  }

  /**
   * private customUserId - Получаем контакт по ID
   *
   * @param  {type} Id
   */
  private customUserId(Id: string): Observable<IUser[]>  {
    var response: IUser[] = UserList.filter(( user ) => {
      return user.id == Id;
    });

    // имитация ответа angular на запрос http.get
    return Observable.create(( observer ) => {
      observer.next(response);
    });
  }


  /**
   * Реализация бэка - Сохраняем новые данные пользователя
   */
  private customSetUser(id, param): Observable<IUser> {
    let response: IUser;

    for (let i = 0; i < UserList.length; i++) {
      if(UserList[i].id == id){
        UserList[i] = {
          ...UserList[i],
          ...param
        };

        response = UserList[i];

        break;
      }
    }

    // имитация ответа angular на запрос http.get
    return Observable.create(( observer ) => {
      observer.next(response);
    });
  }
}

/**
 *  Список всех пользователей
 */
let UserList: IUser[] = [
  {
    avatarUrl: "avatar_3.svg",
    name: "Rhodes Rasmussen",
    id: "0"
  },
  {
    avatarUrl: "avatar_1.svg",
    name: "Jacklyn Whitley",
    id: "1"
  },
  {
    avatarUrl: "avatar_1.svg",
    name: "Morin Barnes",
    id: "2"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Rollins Huff",
    id: "3"
  },
  {
    avatarUrl: "avatar_3.svg",
    name: "Wilcox Maynard",
    id: "4"
  },
  {
    avatarUrl: "avatar_5.svg",
    name: "Alyson Stephenson",
    id: "5"
  },
  {
    avatarUrl: "avatar_3.svg",
    name: "Crawford Tillman",
    id: "6"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Dawn Wyatt",
    id: "7"
  },
  {
    avatarUrl: "avatar_5.svg",
    name: "Dawson Hawkins",
    id: "8"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Burton Morin",
    id: "9"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Mccray Sykes",
    id: "10"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Marva Blackburn",
    id: "11"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Griffith Tanner",
    id: "12"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Giles Morales",
    id: "13"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Dina Serrano",
    id: "14"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Lynne Craig",
    id: "15"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Yvonne Strickland",
    id: "16"
  },
  {
    avatarUrl: "avatar_5.svg",
    name: "Margie Hickman",
    id: "17"
  },
  {
    avatarUrl: "avatar_3.svg",
    name: "Pauline Christensen",
    id: "18"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Dudley Thomas",
    id: "19"
  },
  {
    avatarUrl: "avatar_3.svg",
    name: "Chang Wilcox",
    id: "20"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Lacy Kinney",
    id: "21"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Sanders Flowers",
    id: "22"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Lena Patton",
    id: "23"
  },
  {
    avatarUrl: "avatar_5.svg",
    name: "Nichols Coffey",
    id: "24"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Reyes Howe",
    id: "25"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Webster Carter",
    id: "26"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Colleen Stevens",
    id: "27"
  },
  {
    avatarUrl: "avatar_1.svg",
    name: "Humphrey Maddox",
    id: "28"
  },
  {
    avatarUrl: "avatar_5.svg",
    name: "Leah Willis",
    id: "29"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Janell Solomon",
    id: "30"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Marla Grant",
    id: "31"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Gutierrez Leblanc",
    id: "32"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Della Summers",
    id: "33"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Horton Harris",
    id: "34"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Roth Pickett",
    id: "35"
  },
  {
    avatarUrl: "avatar_3.svg",
    name: "Moreno Nielsen",
    id: "36"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Vilma Mccarty",
    id: "37"
  },
  {
    avatarUrl: "avatar_1.svg",
    name: "Snyder Everett",
    id: "38"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Rosalinda Burch",
    id: "39"
  },
  {
    avatarUrl: "avatar_5.svg",
    name: "Stanley Vang",
    id: "40"
  },
  {
    avatarUrl: "avatar_1.svg",
    name: "Monique Kelly",
    id: "41"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Tracy Good",
    id: "42"
  },
  {
    avatarUrl: "avatar_5.svg",
    name: "Verna Emerson",
    id: "43"
  },
  {
    avatarUrl: "avatar_1.svg",
    name: "Best Gray",
    id: "44"
  },
  {
    avatarUrl: "avatar_1.svg",
    name: "Nielsen Cherry",
    id: "45"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Shaffer Vaughan",
    id: "46"
  },
  {
    avatarUrl: "avatar_1.svg",
    name: "Joanne Hale",
    id: "47"
  },
  {
    avatarUrl: "avatar_1.svg",
    name: "Jannie Koch",
    id: "48"
  },
  {
    avatarUrl: "avatar_1.svg",
    name: "Rhonda Kane",
    id: "49"
  },
  {
    avatarUrl: "avatar_5.svg",
    name: "Murphy Lambert",
    id: "50"
  },
  {
    avatarUrl: "avatar_3.svg",
    name: "Petra Guzman",
    id: "51"
  },
  {
    avatarUrl: "avatar_5.svg",
    name: "Lesa Burke",
    id: "52"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Trevino Baldwin",
    id: "53"
  },
  {
    avatarUrl: "avatar_5.svg",
    name: "Payne Green",
    id: "54"
  },
  {
    avatarUrl: "avatar_5.svg",
    name: "Donaldson Glover",
    id: "55"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Sondra Lucas",
    id: "56"
  },
  {
    avatarUrl: "avatar_1.svg",
    name: "Ida West",
    id: "57"
  },
  {
    avatarUrl: "avatar_5.svg",
    name: "Witt Buckner",
    id: "58"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Stephens Zamora",
    id: "59"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Frye Bauer",
    id: "60"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Gould Castaneda",
    id: "61"
  },
  {
    avatarUrl: "avatar_5.svg",
    name: "Julianne Slater",
    id: "62"
  },
  {
    avatarUrl: "avatar_3.svg",
    name: "Slater Waller",
    id: "63"
  },
  {
    avatarUrl: "avatar_3.svg",
    name: "Lopez Ray",
    id: "64"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Mamie Jensen",
    id: "65"
  },
  {
    avatarUrl: "avatar_3.svg",
    name: "Ana Collins",
    id: "66"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Lydia Wiggins",
    id: "67"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Macdonald Yang",
    id: "68"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Sargent Buchanan",
    id: "69"
  },
  {
    avatarUrl: "avatar_1.svg",
    name: "Davenport Delaney",
    id: "70"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Blake Dominguez",
    id: "71"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Fletcher Barker",
    id: "72"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Aurora Salazar",
    id: "73"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Francis Thornton",
    id: "74"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Kramer Barlow",
    id: "75"
  },
  {
    avatarUrl: "avatar_3.svg",
    name: "Leola Stanley",
    id: "76"
  },
  {
    avatarUrl: "avatar_1.svg",
    name: "Gamble Salas",
    id: "77"
  },
  {
    avatarUrl: "avatar_3.svg",
    name: "Christie Shaffer",
    id: "78"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Edwards Osborne",
    id: "79"
  },
  {
    avatarUrl: "avatar_5.svg",
    name: "Isabel Decker",
    id: "80"
  },
  {
    avatarUrl: "avatar_3.svg",
    name: "Marianne Clayton",
    id: "81"
  },
  {
    avatarUrl: "avatar_1.svg",
    name: "Valarie Ward",
    id: "82"
  },
  {
    avatarUrl: "avatar_5.svg",
    name: "Patti Lynch",
    id: "83"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Beck Kelley",
    id: "84"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Callahan Suarez",
    id: "85"
  },
  {
    avatarUrl: "avatar_5.svg",
    name: "Oconnor May",
    id: "86"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Alberta Bridges",
    id: "87"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Oneil Santiago",
    id: "88"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Mayo Norton",
    id: "89"
  },
  {
    avatarUrl: "avatar_1.svg",
    name: "Hutchinson Spencer",
    id: "90"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Bryant Doyle",
    id: "91"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Allyson Robertson",
    id: "92"
  },
  {
    avatarUrl: "avatar_5.svg",
    name: "Marilyn Trujillo",
    id: "93"
  },
  {
    avatarUrl: "avatar_1.svg",
    name: "Faye Aguilar",
    id: "94"
  },
  {
    avatarUrl: "avatar_2.svg",
    name: "Simon Vinson",
    id: "95"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Farley Valencia",
    id: "96"
  },
  {
    avatarUrl: "avatar_3.svg",
    name: "Aurelia Francis",
    id: "97"
  },
  {
    avatarUrl: "avatar_5.svg",
    name: "Melva Mcclain",
    id: "98"
  },
  {
    avatarUrl: "avatar_4.svg",
    name: "Pruitt Sweet",
    id: "99"
  }
];
