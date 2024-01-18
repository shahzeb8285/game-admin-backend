import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerUpdateWithoutWallet_requestsInput } from './player-update-without-wallet-requests.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutWallet_requestsInput } from './player-create-without-wallet-requests.input';
import { PlayerWhereInput } from './player-where.input';

@InputType()
export class PlayerUpsertWithoutWallet_requestsInput {

    @Field(() => PlayerUpdateWithoutWallet_requestsInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutWallet_requestsInput)
    update!: PlayerUpdateWithoutWallet_requestsInput;

    @Field(() => PlayerCreateWithoutWallet_requestsInput, {nullable:false})
    @Type(() => PlayerCreateWithoutWallet_requestsInput)
    create!: PlayerCreateWithoutWallet_requestsInput;

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;
}
