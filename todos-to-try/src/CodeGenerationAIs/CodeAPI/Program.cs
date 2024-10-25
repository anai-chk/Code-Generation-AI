using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using WebApplication1.Data;
using WebApplication1.Repositories;
using WebApplication1.Services;

namespace WebApplication1
{
    // アプリケーションのエントリポイント
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();

            // データベースの初期化
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var loggerFactory = services.GetRequiredService<ILoggerFactory>();
                try
                {
                    var context = services.GetRequiredService<ApplicationDbContext>();
                    DbInitializer.Initialize(context); // データベースの初期化メソッド
                }
                catch (Exception ex)
                {
                    var logger = loggerFactory.CreateLogger<Program>();
                    logger.LogError(ex, "データベースの初期化中にエラーが発生しました。");
                }
            }

            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            // ホストビルダーの作成
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>(); // スタートアップクラスの指定
                });
    }
}


// using Microsoft.AspNetCore.Hosting,
// using Microsoft.Extensions.DependencyInjection,
// using Microsoft.Extensions.Hosting;
// using Microsoft.Extensions.Logging;
// using WebAppIication1.Data;
// using WebAppIication1.Repositories;
// using WebAppIication1.S0「ⅵ(0S;
// namespace WebAppIication1
// / / アプリケーションのエントリポイント
// public class Program
// public static VOid Main(string[] a 「 gs)
// var hOSt = CreateHostBuiIder(args).BuiId();
// 〃 データベースの初期化
// using (var scope = host.Services.CreateScope())
// var services = SCOpe.ServiceProvider;
// var loggerFacto 「 y = services.GetRequiredService く lLoggerFactory>();
// try
// var context 、 services.GetRequiredService<ApplicationDbContext>();
// Dblnitializer.lnitialize(context); / / データベースの初期化メソッド
// catch (Exception ex)
// var logger = loggerFacto 「 y.CreateLogger く Program>();
// logger.LogError(ex, " データベースの初期化中にエラーが発生しました 。 " ) ;
// public static IHostBuiIder CreateHostBuiIder(string[] args)
// / / ホストビルダーの作成
// host.Run();
// webBuilder.UseStartup く Startup>(); / / スタートアップクラスの指定
// .ConfigureWebHostDefauIts(webBuiIder = >
// HOSt.C 「 eateDefauItBuiIder(args)