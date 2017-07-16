import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Apollo} from "apollo-angular";
import gql from "graphql-tag";


interface UserResponse {
	User: Object
}


const CurrentUserForProfile = gql`
  query {
    User (id: "cj2z1m9rtmojg01749i36wspj"){
      level
      email
      name
    }
  }
`;



@Injectable()
export class AccountPageService {
	constructor(private apollo: Apollo) {}

	loadUser() {
		return new Observable(observer => {
			this.apollo.watchQuery<UserResponse>({
				query: CurrentUserForProfile,
			}).subscribe(({data}) => {
				observer.next(data.User);
			});
		});
	}
}
