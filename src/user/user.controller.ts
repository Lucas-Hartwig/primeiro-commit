
import { Controller, Post, Body, Get, Param, Put, Patch, Delete, ParseIntPipe, UseInterceptors } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO} from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";
import { LogInterceptor } from '../interceptors/log.interceptor';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService ){}

    @UseInterceptors(LogInterceptor)
    @Post()
    async create(@Body() data: CreateUserDTO) {
        return this.userService.create(data);
    }

    @Get()
    async list() {
        return { users: [] }
    }

    @Get(':id')
    async show(@Param('id', ParseIntPipe ) id: number) {
        return { users: {}, id }
    }

    @Put(':id')
    async update(@Body() {email, name, password}: UpdatePutUserDTO, @Param('id', ParseIntPipe ) id: number) {
        return {
            method: 'put',
            email, name, password,
            id
        }
    }

    @Patch(':id')
        async updatePartial(@Body() {email, name, password}:UpdatePatchUserDTO, @Param('id', ParseIntPipe ) id: number) {
        return {
            method: 'patch',
            email, name, password,
            id
        }
    }

    @Delete (':id')
    async delete(@Param('id', ParseIntPipe ) id: number){
        return {
            id
        }
    }
}