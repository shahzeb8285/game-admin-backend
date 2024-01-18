import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletRequestCreateManyPlayersInput } from './wallet-request-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class WalletRequestCreateManyPlayersInputEnvelope {

    @Field(() => [WalletRequestCreateManyPlayersInput], {nullable:false})
    @Type(() => WalletRequestCreateManyPlayersInput)
    data!: Array<WalletRequestCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
