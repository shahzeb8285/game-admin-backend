import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerLoginLogCreateManyInput } from './player-login-log-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPlayerLoginLogArgs {

    @Field(() => [PlayerLoginLogCreateManyInput], {nullable:false})
    @Type(() => PlayerLoginLogCreateManyInput)
    data!: Array<PlayerLoginLogCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
