import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AllOwRequestUpdateInput } from './all-ow-request-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AllOwRequestWhereUniqueInput } from './all-ow-request-where-unique.input';

@ArgsType()
export class UpdateOneAllOwRequestArgs {

    @Field(() => AllOwRequestUpdateInput, {nullable:false})
    @Type(() => AllOwRequestUpdateInput)
    data!: AllOwRequestUpdateInput;

    @Field(() => AllOwRequestWhereUniqueInput, {nullable:false})
    @Type(() => AllOwRequestWhereUniqueInput)
    where!: Prisma.AtLeast<AllOwRequestWhereUniqueInput, 'allow_request_id'>;
}
