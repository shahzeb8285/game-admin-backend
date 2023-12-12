import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_accessesWhereInput } from '../admin-accesses/admin-accesses-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyadminAccessesArgs {

    @Field(() => admin_accessesWhereInput, {nullable:true})
    @Type(() => admin_accessesWhereInput)
    where?: admin_accessesWhereInput;
}
