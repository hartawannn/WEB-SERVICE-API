import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateDestinasiDto } from './dto/create-destinasi.dto.js';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto.js';

@ApiTags('Destinasi')
@Controller('destinasi')
export class DestinasiController {

  @Get()
  @ApiOperation({ summary: 'Menampilkan daftar destinasi wisata' })
  @ApiResponse({ status: 200, description: 'Daftar destinasi berhasil diambil' })
  findAll() {
    return [
      {
        id: 1,
        nama: 'Pantai Kuta Mandalika',
        kategori: 'Pantai',
        hargaTiket: 15000,
      },
      {
        id: 2,
        nama: 'Air Terjun Tiu Kelep',
        kategori: 'Air Terjun',
        hargaTiket: 10000,
      },
    ];
  }

  @Post()
  @ApiOperation({ summary: 'Menambahkan destinasi baru (khusus admin)' })
  @ApiResponse({ status: 201, description: 'Destinasi berhasil dibuat' })
  @ApiResponse({ status: 400, description: 'Data tidak valid' })
  create(@Body() dto: CreateDestinasiDto) {
    return {
      id: 3,
      ...dto,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Menampilkan detail destinasi berdasarkan ID' })
  @ApiResponse({ status: 200, description: 'Detail destinasi berhasil diambil' })
  @ApiResponse({ status: 404, description: 'Destinasi tidak ditemukan' })
  findOne(@Param('id') id: string) {
    return {
      id: Number(id),
      nama: 'Pantai Kuta Mandalika',
      kategori: 'Pantai',
      hargaTiket: 15000,
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Memperbarui data destinasi berdasarkan ID' })
  @ApiResponse({ status: 200, description: 'Destinasi berhasil diperbarui' })
  @ApiResponse({ status: 400, description: 'Data tidak valid' })
  @ApiResponse({ status: 404, description: 'Destinasi tidak ditemukan' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateDestinasiDto,
  ) {
    return {
      id: Number(id),
      ...dto,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Menghapus destinasi berdasarkan ID' })
  @ApiResponse({ status: 200, description: 'Destinasi berhasil dihapus' })
  @ApiResponse({ status: 404, description: 'Destinasi tidak ditemukan' })
  remove(@Param('id') id: string) {
    return {
      message: `Destinasi dengan ID ${id} berhasil dihapus`,
    };
  }
}