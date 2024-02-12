import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFilter } from 'src/@generated/prisma/bool-filter.input';
import { FloatFilter } from 'src/@generated/prisma/float-filter.input';
import { FloatNullableFilter } from 'src/@generated/prisma/float-nullable-filter.input';
import { IntFilter } from 'src/@generated/prisma/int-filter.input';
import { StringFilter } from 'src/@generated/prisma/string-filter.input';


@InputType()
export class DateFilter {


    @Field(() => Date, {nullable:true})
    lte?: Date | string;

    @Field(() => Date, {nullable:true})
    gte?: Date | string;

    
}





@InputType()
export class GameRecordRoundsWhereInput {


    @Field(() => String, {nullable:true})
    tg_id?: String;


    @Field(() => String, {nullable:true})
    game_round_info_id?: String;

    
    @Field(() => String, {nullable:true})
    merchant_name?: String;

    @Field(() => String, {nullable:true})
    game_category?: String;

    @Field(() => DateFilter, {nullable:true})
    cdate?: DateFilter;

    @Field(() => String, {nullable:true})
    game_name?: String;


   
}
