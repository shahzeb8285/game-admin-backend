import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { wallet_requestsCreateManyPlayersInput } from './wallet-requests-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class wallet_requestsCreateManyPlayersInputEnvelope {

    @Field(() => [wallet_requestsCreateManyPlayersInput], {nullable:false})
    @Type(() => wallet_requestsCreateManyPlayersInput)
    data!: Array<wallet_requestsCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
