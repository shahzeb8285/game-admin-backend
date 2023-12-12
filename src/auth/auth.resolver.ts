import {
  Resolver,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './models/auth.model';
import { Token } from './models/token.model';
import { LoginInput } from './dto/login.input';
import { SignupInput } from './dto/signup.input';
import { RefreshTokenInput } from './dto/refresh-token.input';
// import { User } from '../users/models/user.model';
import { UserIp } from '../common/decorators/ip.decorator';
import {BadGatewayException} from "@nestjs/common"
@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly auth: AuthService) {}

  
  @Mutation(() => Auth)
  async login(@Args('data') { admin_name, password }: LoginInput,@UserIp() ipAddress: string) {
    if (!ipAddress) {
      throw new BadGatewayException("IP not found")
    }

     
    const { access_token, refresh_token } = await this.auth.login(
      admin_name.toLowerCase(),
      password,
      ipAddress
    );

    return {
      access_token,
      refresh_token,
    };
  }

  @Mutation(() => Token)
  async refreshToken(@Args() { token }: RefreshTokenInput) {
    return this.auth.refreshToken(token);
  }

  // @ResolveField('admin', () => Admin)
  async getMe(@Parent() auth: Auth) {
    return await this.auth.getUserFromToken(auth.access_token);
  }
}
