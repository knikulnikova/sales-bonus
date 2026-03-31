/**
 * Функция для расчета выручки
 * @param purchase запись о покупке
 * @param _product карточка товара
 * @returns {number}
 */
function calculateSimpleRevenue(purchase, _product) {
   // @TODO: Расчет выручки от операции
   const { discount, sale_price, quantity } = purchase;
}

/**
 * Функция для расчета бонусов
 * @param index порядковый номер в отсортированном массиве
 * @param total общее число продавцов
 * @param seller карточка продавца
 * @returns {number}
 */
function calculateBonusByProfit(index, total, seller) {
    // @TODO: Расчет бонуса от позиции в рейтинге
    const { profit } = seller;
}

/**
 * Функция для анализа данных продаж
 * @param data
 * @param options
 * @returns {{revenue, top_products, bonus, name, sales_count, profit, seller_id}[]}
 */
function analyzeSalesData(data, options) {
    //Проверка входных данных
    if (!data
        || !Array.isArray(data.products)
        || !Array.isArray(data.sellers)
        || !Array.isArray(data.purchase_records)
        || (data.products.length === 0)
        || (data.sellers.length === 0)
        || (data.purchase_records.length === 0)
      ) {
        throw new Error('Некорректные входные данные');
      }

    //Проверка наличия опций
    if (!(typeof options === "object")) {
      throw new Error('Опции не объект');
    }

    const { calculateRevenue, calculateBonus } = options;

    if (!calculateRevenue || !calculateBonus) {
      throw new Error('Чего-то не хватает');
    }

    if (!(typeof calculateRevenue === "function")
        || !(typeof calculateBonus === "function")
      ) {
        throw new Error('Опции не функции');
      }

    //Подготовка промежуточных данных для сбора статистики
    const sellerStats = data.sellers.map(seller => ({
        id: seller.id,
        name: `${seller.first_name} ${seller.last_name}`,
        revenue: 0,
        profit: 0,
        sales_count: 0,
        products_sold: {}
      }));

    //Индексация продавцов и товаров для быстрого доступа
    const sellerIndex = sellerStats.reduce((result, item) => ({
      ...result,
      [item.id]: item
    }), {});

    const productIndex = data.products.reduce((result, item) => ({
      ...result,
      [item.sku]: item
    }), {});

    // @TODO: Расчет выручки и прибыли для каждого продавца

    // @TODO: Сортировка продавцов по прибыли

    // @TODO: Назначение премий на основе ранжирования

    // @TODO: Подготовка итоговой коллекции с нужными полями
}

console.log(analyzeSalesData(data, {
            calculateRevenue: calculateSimpleRevenue,
            calculateBonus: calculateBonusByProfit
        }));
