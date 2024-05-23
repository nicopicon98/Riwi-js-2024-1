// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './app/index.js', // Archivo de entrada de la aplicación
  output: { // Configuración de salida, o sea, donde se guardará el bundle
    path: path.resolve(__dirname, 'bundle'), // Directorio de salida
    filename: 'bundle.js', // Nombre del archivo de salida
    publicPath: '/', // Ruta relativa para los recursos
    clean: true // Limpia el directorio de salida antes de generar el bundle
  },
  module: { // Configuración de los módulos, los modulos son: loaders, rules, etc.
    rules: [ // Reglas para los módulos
      {
        test: /\.js$/, // Expresión regular para identificar los archivos js
        exclude: /node_modules/, // Excluye la carpeta node_modules
        use: { // Loader a utilizar
          loader: 'babel-loader' // Babel loader, recordemos que babel transforma el código js moderno a js compatible con navegadores antiguos
        }
      },
      {
        test: /\.css$/, // Expresión regular para identificar los archivos css
        exclude: /node_modules/,  // Excluye node_modules
        use: [ // Loader a utilizar
          MiniCssExtractPlugin.loader, // Extrae el css a un archivo independiente
          {
            loader: 'css-loader', // Interpreta los archivos css
            options: { // Opciones del loader
              modules: { // Habilita el uso de módulosy poder importar estilos en los archivos js asi: import estilos from './estilos.css';
                localIdentName: '[name]__[local]___[hash:base64:5]' // Nombre de las clases hasheadas
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource', // asset/resource sustituye a file-loader
        generator: {
          filename: 'assets/[name][ext]' // Define la carpeta de salida y el formato del nombre del archivo
        },
        use: {
          loader: 'image-webpack-loader', // Optimiza las imágenes
          options: { // Opciones de optimización
            mozjpeg: { // Optimiza las imágenes jpeg
              progressive: true, // Habilita la optimización progresiva, o sea, la imagen se va cargando a medida que se va descargando
              quality: 65 // Calidad de la imagen
            },
            optipng: { // Optimiza las imágenes png
              enabled: false, // Habilita la optimización
            },
            pngquant: { // Optimiza las imágenes png, a diferencia de optipng, pngquant es más agresivo
              quality: [0.65, 0.90], // Calidad de la imagen
              speed: 4 // Velocidad de optimización
            },
            gifsicle: { // Optimiza las imágenes gif
              interlaced: false, // Habilita la optimización entrelazada, o sea, la imagen se va cargando a medida que se va descargando
            },
            webp: { // Optimiza las imágenes webp
              quality: 75 // Calidad de la imagen
            }
          }
        },
      },
      {
        test: /\.css$/,
        include: /node_modules/,  // Incluye explícitamente node_modules aquí
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'  // Usar css-loader sin opciones de módulos
        ]
      },
    ]
  },
  plugins: [ // Configuración de los plugins
    new HtmlWebpackPlugin({ // Genera un archivo html en el directorio de salida
      template: './index.html', // Plantilla html
      filename: 'index.html' // Nombre del archivo de salida
    }),
    new MiniCssExtractPlugin({ // Extrae el css a un archivo independiente
      filename: '[name].[contenthash].css', // Nombre del archivo de salida
      chunkFilename: '[id].[contenthash].css' // Nombre del archivo de salida
    })
  ],
  devServer: { // Configuración del servidor de desarrollo
    static: { // Directorio base del servidor
      directory: path.join(__dirname, 'dist') // Directorio de salida
    },
    compress: true, // Habilita la compresión
    port: 9000, // Puerto del servidor
    historyApiFallback: { // Habilita el enrutamiento de aplicaciones de una sola página
      index: '/index.html', // super importante para que funcione el enrutamiento de aplicaciones de una sola página
    }
  }
};

/**
 * Diferencias entre css-loader y el plugin de MiniCssExtractPlugin
 * 
 * css-loader: Interpreta los archivos css y los convierte en un módulo de JavaScript
 * MiniCssExtractPlugin: Extrae el css a un archivo independiente. Con la opcion MiniCssExtractPlugin.loader
 * lo que estamos haciendo es extraer el css a un archivo independiente, en lugar de inyectarlo en el html.
 * Entonces, porque los llamamos en los plugins y en los loaders? Porque el css-loader es un loader que se encarga
 * de interpretar los archivos css, mientras que el MiniCssExtractPlugin es un plugin que se encarga de extraer el css
 * a un archivo independiente. El plugin se llama en la sección de plugins, mientras que el loader se llama en la sección
 * de rules.
 */