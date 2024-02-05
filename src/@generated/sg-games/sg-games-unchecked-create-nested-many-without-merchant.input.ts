import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_gamesCreateWithoutMerchantInput } from './sg-games-create-without-merchant.input';
import { Type } from 'class-transformer';
import { sg_gamesCreateOrConnectWithoutMerchantInput } from './sg-games-create-or-connect-without-merchant.input';
import { sg_gamesCreateManyMerchantInputEnvelope } from './sg-games-create-many-merchant-input-envelope.input';
import { sg_gamesWhereUniqueInput } from './sg-games-where-unique.input';

@InputType()
export class sg_gamesUncheckedCreateNestedManyWithoutMerchantInput {

    @Field(() => [sg_gamesCreateWithoutMerchantInput], {nullable:true})
    @Type(() => sg_gamesCreateWithoutMerchantInput)
    create?: Array<sg_gamesCreateWithoutMerchantInput>;

    @Field(() => [sg_gamesCreateOrConnectWithoutMerchantInput], {nullable:true})
    @Type(() => sg_gamesCreateOrConnectWithoutMerchantInput)
    connectOrCreate?: Array<sg_gamesCreateOrConnectWithoutMerchantInput>;

    @Field(() => sg_gamesCreateManyMerchantInputEnvelope, {nullable:true})
    @Type(() => sg_gamesCreateManyMerchantInputEnvelope)
    createMany?: sg_gamesCreateManyMerchantInputEnvelope;

    @Field(() => [sg_gamesWhereUniqueInput], {nullable:true})
    @Type(() => sg_gamesWhereUniqueInput)
    connect?: Array<sg_gamesWhereUniqueInput>;
}
