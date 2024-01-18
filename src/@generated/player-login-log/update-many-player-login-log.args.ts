import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerLoginLogUpdateManyMutationInput } from './player-login-log-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PlayerLoginLogWhereInput } from './player-login-log-where.input';

@ArgsType()
export class UpdateManyPlayerLoginLogArgs {

    @Field(() => PlayerLoginLogUpdateManyMutationInput, {nullable:false})
    @Type(() => PlayerLoginLogUpdateManyMutationInput)
    data!: PlayerLoginLogUpdateManyMutationInput;

    @Field(() => PlayerLoginLogWhereInput, {nullable:true})
    @Type(() => PlayerLoginLogWhereInput)
    where?: PlayerLoginLogWhereInput;
}
