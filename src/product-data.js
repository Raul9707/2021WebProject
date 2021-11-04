const products=[
    {
        id:1,
        name: "GeForce MSI G210",
        Type: "GPU",
        productType: "Placa de Video GeForce MSI G210 1GB DDR3",
        price: 50,
        rating: 2,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26735_Placa_de_Video_GeForce_MSI_G210_1GB_DDR3_Low_Profile_c07b4910-grn.jpg",
        description: "Tipo: pcie, Chipset Gpu: G 210, Entrada Video: No, Puente para Sli/croosFirex : no, Doble Puente: no",

    },
    {
        id:2,
        name: "GeForce GTX 1650",
        Type: "GPU",
        productType: "Placa de Video GeForce MSI GTX 1650 4GB GDDR5 Ventus XS OC",
        price: 200,
        rating: 4,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12810_Placa_de_Video_GeForce_MSI_GTX_1650_4GB_GDDR5_Ventus_XS_OC_29071d1f-grn.jpg",
        description: "Tipo: pcie, Chipset Gpu: GTX 1650, Entrada Video: No, Puente para Sli/croosFirex : no, Doble Puente: no, caracteristicas especiales: Ray Tracing por software",
    },
    {
        id:3,
        name: "GeForce GTX 1660",
        Type: "GPU",
        productType: "Placa de Video MSI GeForce GTX 1660 Ti 6GB GDDR6 Ventus XS OC",
        price: 400,
        rating: 3,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12198_Placa_de_Video_MSI_GeForce_GTX_1660_Ti_6GB_GDDR6_Ventus_XS_OC_7d3c8fd2-grn.jpg",
        description: "Tipo: pcie, Chipset Gpu: GTX 1660 Ti, Entrada Video: No, Puente para Sli/croosFirex : no, Doble Puente: no, caracteristicas especiales: Ray Tracing por software",
    },
    {
        id:4,
        name: "GeForce RTX 3070",
        Type: "GPU",
        productType: "Placa de Video Palit GeForce RTX 3070 8GB GDDR6 GamingPro",
        price: 800,
        rating: 4,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28372_Placa_de_Video_Palit_GeForce_RTX_3070_8GB_GDDR6_GAMEROCK_0d250c2c-grn.jpg",
        description: "Tipo: pcie, Chipset Gpu: RTX 3070, Entrada Video: No, Puente para Sli/croosFirex : no, Doble Puente: no, caracteristicas especiales: Ray Tracing + DLSS",
    },



    {
        id:5,
        name: "Memoria Team DDR4",
        Type: "Ram",
        productType: "Memoria Team DDR4 8GB 2666MHz Elite Plus Black Gold",
        price: 40,
        rating: 3,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12172_Memoria_Team_DDR4_8GB_2666MHz_Elite_Plus_Black_Gold_0e3f1fef-grn.jpg",
        description: "Capacidad: 8GB, Velocidad: 2666mhz, Tipo: DDR4, Latencia: 1, Voltaje: 1,20v",
    },
    {
        id:6,
        name: "Memoria Vulcan DDR4",
        Type: "Ram",
        productType: "Memoria Team DDR4 8GB 2666MHz T-Force Vulcan Z Red",
        price: 45,
        rating: 4,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13324_Memoria_Team_DDR4_8GB_2666MHz_T-Force_Vulcan_Z_Red__2e8a62ba-grn.jpg",
        description: "Capacidad: 8GB, Velocidad: 2666mhz, Tipo: DDR4, Latencia: 18 cl, Voltaje: 1,20v",
    },
    {
        id:7,
        name: "Memoria GeiL DDR4",
        Type: "Ram",
        productType: "Memoria GeiL DDR4 8GB 3000MHZ EVO POTENZA Black",
        price: 50,
        rating: 5,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17106_Memoria_GeiL_DDR4_8GB_3000MHZ_EVO_POTENZA_Black_d2c138d0-grn.jpg",
        description: "Capacidad: 8GB, Velocidad: 3000mhz, Tipo: DDR4, Latencia: 16cl, Voltaje: 1,35v",
    },
    {
        id:8,
        name: "Memoria Orion DDR4",
        Type: "Ram",
        productType: "Memoria GeiL DDR4 16GB 3000MHz Orion Black",
        price: 80,
        rating: 4,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20539_Memoria_GeiL_DDR4_16GB_3000MHz_Orion_Black_eace4827-grn.jpg",
        description: "Capacidad: 16GB, Velocidad: 3000mhz, Tipo: DDR4, Latencia: 16cl, Voltaje: 1,35v",
    },


    {
        id:9,
        name: "Procesador AMD A6",
        Type: "CPU",
        productType: "Procesador AMD A6 7480 3.5GHz FM2+ Dual Core 65W",
        price: 50,
        rating: 3,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12728_Procesador_AMD_A6_7480_3.5GHz_FM2__Dual_Core_65W__a0d46ee3-grn.jpg",
        description: "Modelo: A6 7480, Socket: FM2+, Nucleos: 2, Frecuencia: 3.50mhz, familia: AMD A-Series",
    },
    {
        id:10,
        name: "Procesador Intel Core i5",
        Type: "CPU",
        productType: "Procesador Intel Core i5 9600K 4.6GHz Turbo 1151 9th Gen Coffee Lake",
        price: 150,
        rating: 4,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_10737_Procesador_Intel_Core_i5_9600K_4.6GHz_Turbo_1151_9th_Gen_Coffee_Lake__27076104-grn.jpg",
        description: "Modelo: Intel Core i5 9600K, Socket: 1151 Coffe Lake, Nucleos: 6, Frecuencia: 3.70mhz, familia: Intel Core i5",
    },
    {
        id:11,
        name: "Procesador AMD RYZEN 7",
        Type: "CPU",
        productType: "Procesador AMD RYZEN 7 3800XT 4.7GHz Turbo",
        price: 250,
        rating: 5,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20003_Procesador_AMD_RYZEN_7_3800XT_4.7GHz_Turbo_19451dfa-grn.jpg",
        description: "Modelo: RYZEN 7 3800XT, Socket: AM4 Ryzen 3th Gen, Nucleos: 8, Frecuencia: 3.90mhz, familia: AMD Ryzen 7",
    },
    {
        id:12,
        name: "Procesador Intel Core i9-11900K",
        Type: "CPU",
        productType: "Procesador Intel Core i9-11900K 5.3GHz Turbo Socket 1200",
        price: 400,
        rating: 4,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25981_Procesador_Intel_Core_i9-11900K_5.3GHz_Turbo_Socket_1200_25c732be-grn.jpg",
        description: "Modelo: 11900K, Socket: 1200 Rocket Lake-S, Nucleos: 8, Frecuencia: 5.30mhz, familia: Intel core i9",
    },
    

    {
        id:13,
        name: "Mother ASUS PRIME A320M-K ",
        Type: "MotherBoard",
        productType: "Mother ASUS PRIME A320M-K Ryzen 2da Gen Ready M-ATX",
        price: 40,
        rating: 5,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15566_Mother_ASUS_PRIME_A320M-K_Ryzen_2da_Gen_Ready_M-ATX_9f5c58de-grn.jpg",
        description: "Plataforma: AMD, Socket: AM5 A-SERIES, AM4 APU, AM4 RYZEN, Chipset Principal: AMD A320",
    },
    {
        id:14,
        name: "Mother Gigabyte H310M-H ",
        Type: "MotherBoard",
        productType: "Mother Gigabyte H310M-H LGA 1151 8va gen",
        price: 50,
        rating: 4,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_7715_Mother_Gigabyte_H310M-H_LGA_1151_8va_gen__bdf6e65f-grn.jpg",
        description: "Plataforma: Intel, Socket: 1151 Coffe Lake, Chipset Principal: Intel H310",
    },
    {
        id:15,
        name: "Mother Gigabyte B450M ",
        Type: "MotherBoard",
        productType: "Mother Gigabyte B450M DS3H WIFI AM4 ",
        price: 70,
        rating: 3,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20949_Mother_Gigabyte_B450M_DS3H_WIFI_AM4_5461f19b-grn.jpg",
        description: "Plataforma: AMD, Socket: AM5 A-SERIES, AM4 APU, AM4 RYZEN, Chipset Principal: AMD B450",
    },
    {
        id:16,
        name: "Mother Asrock Z590M ",
        Type: "MotherBoard",
        productType: "Mother Asrock Z590M PRO4 Socket 1200 Intel 11th Gen",
        price: 100,
        rating: 4,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28253_Mother_Asrock_Z590M_PRO4_Socket_1200_Intel_11th_Gen_3ff1634c-grn.jpg",
        description: "Plataforma: Intel, Socket: 1200 Rocket Lake-S,1200 Comet Lake , Chipset Principal: Intel Z590",
    },


    {
        id:17,
        name: "Gabinete Gamemax H602 ",
        Type: "Cases",
        productType: "Gabinete Gamemax H602 WB White M-ATX FAN 1 x 120mm",
        price: 25,
        rating: 4,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_8182_Gabinete_Gamemax_H602_WB_White_M-ATX_FAN_1_x_120mm_bb3049ea-grn.jpg",
        description: "Factor Mother: ITX, M-ATX, Fuente en posicion superior: No, Con Ventana: Si, Tipo de Ventana: Vidrio templado, Colores: Blanco",
    },
    {
        id:18,
        name: "Gabinete Aerocool Shard ",
        Type: "Cases",
        productType: "Gabinete Aerocool Shard Black RGB Vidrio Templado 4 x Fan RGB",
        price: 40,
        rating: 3,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13638_Gabinete_Aerocool_Shard_Black_RGB_Vidrio_Templado_4_x_Fan_RGB_f47eb573-grn.jpg",
        description: "Factor Mother: ITX, M-ATX, Fuente en posicion superior: No, Con Ventana: Si, Tipo de Ventana: Vidrio templado, Colores: Negro",
    },
    {
        id:19,
        name: "Gabinete Deepcool ",
        Type: "Cases",
        productType: "Gabinete Deepcool MATREXX 55 V3 ADD-RGB 3F Black",
        price: 55,
        rating: 4,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21198_Gabinete_Deepcool_MATREXX_55_V3_ADD-RGB_3F_Black_116fa4a2-grn.jpg",
        description: "Factor Mother: ITX,M-ATX,ATX,E-ATX, Fuente en posicion superior: No, Con Ventana: Si, Tipo de Ventana: Vidrio templado, Colores: Negro",
    },
    {
        id:20,
        name: "Gabinete Lian Li ",
        Type: "Cases",
        productType: "Gabinete Lian Li 011 Dynamic Razer Edition",
        price: 100,
        rating: 5,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_24523_Gabinete_Lian_Li_011_Dynamic_Razer_Edition_37732028-grn.jpg",
        description: "Factor Mother: ITX,M-ATX,ATX,E-ATX, Fuente en posicion superior: No, Con Ventana: Si, Tipo de Ventana: Vidrio templado, Colores: Negro",
    },

    {
        id:21,
        name: "Cooler CPU DeepCool ",
        Type: "Coolers",
        productType: "Cooler CPU DeepCool Gammaxx 400S",
        price: 20,
        rating: 5,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20809_Cooler_CPU_DeepCool_Gammaxx_400S_d20b72ff-grn.jpg",
        description: "Consumo: 5w, TDP: 130w, Tipo de disipasión: Aire",
    },
    {
        id:22,
        name: "Cooler CPU Cooler Master ",
        Type: "Coolers",
        productType: "Cooler CPU Cooler Master Master Air MA410P RGB",
        price: 40,
        rating: 4,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_8399_Cooler_CPU_Cooler_Master_Master_Air_MA410P_RGB__ba8ad2bb-grn.jpg",
        description: "Consumo: 5w, TDP: 150w, Tipo de disipasión: Aire",
    },

    {
        id:23,
        name: "Cooler CPU ID-Cooling",
        Type: "Coolers",
        productType: "Cooler CPU ID-Cooling ICEFLOW 240 ARGB",
        price: 55,
        rating: 4,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22528_Cooler_CPU_ID-Cooling_ICEFLOW_240_ARGB_a6479a9e-grn.jpg",
        description: "Consumo: 7w, TDP: 250w, Tipo de disipasión: Watercooling",
    },

    {
        id:24,
        name: "Cooler CPU AZZA Blizzard ",
        Type: "Coolers",
        productType: "Cooler CPU AZZA Blizzard LCAZ 360R WaterCooler 360mm ARGB",
        price: 100,
        rating: 3,
        image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25295_Cooler_CPU_AZZA_Blizzard_LCAZ_360R_WaterCooler_360mm_ARGB__45fd88de-grn.jpg",
        description: "Consumo: 15w, TDP: 180w, Tipo de disipasión: Watercooling",
    },






]

export default products;