import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerLoginLogScalarWhereInput } from './player-login-log-scalar-where.input';
import { Type } from 'class-transformer';
import { PlayerLoginLogUpdateManyMutationInput } from './player-login-log-update-many-mutation.input';

@InputType()
export class PlayerLoginLogUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => PlayerLoginLogScalarWhereInput, {nullable:false})
    @Type(() => PlayerLoginLogScalarWhereInput)
    where!: PlayerLoginLogScalarWhereInput;

    @Field(() => PlayerLoginLogUpdateManyMutationInput, {nullable:false})
    @Type(() => PlayerLoginLogUpdateManyMutationInput)
    data!: PlayerLoginLogUpdateManyMutationInput;
}
