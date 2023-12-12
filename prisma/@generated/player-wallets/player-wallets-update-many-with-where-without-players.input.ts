import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_walletsScalarWhereInput } from './player-wallets-scalar-where.input';
import { Type } from 'class-transformer';
import { player_walletsUpdateManyMutationInput } from './player-wallets-update-many-mutation.input';

@InputType()
export class player_walletsUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => player_walletsScalarWhereInput, {nullable:false})
    @Type(() => player_walletsScalarWhereInput)
    where!: player_walletsScalarWhereInput;

    @Field(() => player_walletsUpdateManyMutationInput, {nullable:false})
    @Type(() => player_walletsUpdateManyMutationInput)
    data!: player_walletsUpdateManyMutationInput;
}
