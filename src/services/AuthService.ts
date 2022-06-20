import { User, UserAttribute } from '../model/Model';

export class AuthService {

    public async login(username: string, password: string):Promise<User | undefined> {
        if (username === 'user' && password === '1234') {
            return {
                username: username,
                email: 'test@test.com'
            }
        }
        else {
            return undefined;
        }
    } 

    public async getUserAttributes(user: User): Promise<UserAttribute[]> {
        const result: UserAttribute[] = [];
        result.push({name: "description", value: "this is an example description"});
        result.push({name: "Job", value: "Software Developer"});
        result.push({name: "Age", value: "27"});
        result.push({name: "Experience", value: "3 Years"});
        return result;
    }
}