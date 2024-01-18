import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWhereInput } from './player-where.input';
import { Type } from 'class-transformer';
import { PlayerUpdateWithoutWallet_requestsInput } from './player-update-without-wallet-requests.input';

@InputType()
export class PlayerUpdateToOneWithWhereWithoutWallet_requestsInput {

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;

    @Field(() => PlayerUpdateWithoutWallet_requestsInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutWallet_requestsInput)
    data!: PlayerUpdateWithoutWallet_requestsInput;
}
