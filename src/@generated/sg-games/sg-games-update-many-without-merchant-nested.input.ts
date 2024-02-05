import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_gamesCreateWithoutMerchantInput } from './sg-games-create-without-merchant.input';
import { Type } from 'class-transformer';
import { sg_gamesCreateOrConnectWithoutMerchantInput } from './sg-games-create-or-connect-without-merchant.input';
import { sg_gamesUpsertWithWhereUniqueWithoutMerchantInput } from './sg-games-upsert-with-where-unique-without-merchant.input';
import { sg_gamesCreateManyMerchantInputEnvelope } from './sg-games-create-many-merchant-input-envelope.input';
import { sg_gamesWhereUniqueInput } from './sg-games-where-unique.input';
import { sg_gamesUpdateWithWhereUniqueWithoutMerchantInput } from './sg-games-update-with-where-unique-without-merchant.input';
import { sg_gamesUpdateManyWithWhereWithoutMerchantInput } from './sg-games-update-many-with-where-without-merchant.input';
import { sg_gamesScalarWhereInput } from './sg-games-scalar-where.input';

@InputType()
export class sg_gamesUpdateManyWithoutMerchantNestedInput {

    @Field(() => [sg_gamesCreateWithoutMerchantInput], {nullable:true})
    @Type(() => sg_gamesCreateWithoutMerchantInput)
    create?: Array<sg_gamesCreateWithoutMerchantInput>;

    @Field(() => [sg_gamesCreateOrConnectWithoutMerchantInput], {nullable:true})
    @Type(() => sg_gamesCreateOrConnectWithoutMerchantInput)
    connectOrCreate?: Array<sg_gamesCreateOrConnectWithoutMerchantInput>;

    @Field(() => [sg_gamesUpsertWithWhereUniqueWithoutMerchantInput], {nullable:true})
    @Type(() => sg_gamesUpsertWithWhereUniqueWithoutMerchantInput)
    upsert?: Array<sg_gamesUpsertWithWhereUniqueWithoutMerchantInput>;

    @Field(() => sg_gamesCreateManyMerchantInputEnvelope, {nullable:true})
    @Type(() => sg_gamesCreateManyMerchantInputEnvelope)
    createMany?: sg_gamesCreateManyMerchantInputEnvelope;

    @Field(() => [sg_gamesWhereUniqueInput], {nullable:true})
    @Type(() => sg_gamesWhereUniqueInput)
    set?: Array<sg_gamesWhereUniqueInput>;

    @Field(() => [sg_gamesWhereUniqueInput], {nullable:true})
    @Type(() => sg_gamesWhereUniqueInput)
    disconnect?: Array<sg_gamesWhereUniqueInput>;

    @Field(() => [sg_gamesWhereUniqueInput], {nullable:true})
    @Type(() => sg_gamesWhereUniqueInput)
    delete?: Array<sg_gamesWhereUniqueInput>;

    @Field(() => [sg_gamesWhereUniqueInput], {nullable:true})
    @Type(() => sg_gamesWhereUniqueInput)
    connect?: Array<sg_gamesWhereUniqueInput>;

    @Field(() => [sg_gamesUpdateWithWhereUniqueWithoutMerchantInput], {nullable:true})
    @Type(() => sg_gamesUpdateWithWhereUniqueWithoutMerchantInput)
    update?: Array<sg_gamesUpdateWithWhereUniqueWithoutMerchantInput>;

    @Field(() => [sg_gamesUpdateManyWithWhereWithoutMerchantInput], {nullable:true})
    @Type(() => sg_gamesUpdateManyWithWhereWithoutMerchantInput)
    updateMany?: Array<sg_gamesUpdateManyWithWhereWithoutMerchantInput>;

    @Field(() => [sg_gamesScalarWhereInput], {nullable:true})
    @Type(() => sg_gamesScalarWhereInput)
    deleteMany?: Array<sg_gamesScalarWhereInput>;
}
