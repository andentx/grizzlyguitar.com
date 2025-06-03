import { Metafield, Product } from "@/lib/shopify/types";

interface GaugeTable {
  gauges: {
    "variant-name": string;
    gauges: string[];
  }[];
}

export function ProductGaugeTable({ product }: { product: Product }) {
  const gaugeTableMetafield = product.metafields?.find(
    (metafield: Metafield) => metafield?.key === "test_gauge_table_01"
  );

  if (!gaugeTableMetafield?.value) return null;

  const gaugeTable: GaugeTable = JSON.parse(gaugeTableMetafield.value);

  return (
    <div className="w-full">
      <h4 className="mb-4 font-[family-name:var(--font-averia-regular)] text-lg font-medium text-gray-900">
        Gauges:
      </h4>
      <div className="overflow-x-auto">
        <div className="inline-block pb-2 align-middle">
          <div className="overflow-hidden rounded-md border border-solid border-gray-700 shadow">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pr-3 pl-6 text-left text-sm font-semibold text-gray-900"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Gauges
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {gaugeTable.gauges.map((variant, index) => (
                  <tr key={index}>
                    <td className="w-44 py-4 pr-3 pl-6 align-middle text-sm font-medium text-gray-900">
                      {variant["variant-name"]}
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center text-sm text-gray-500">
                        {variant.gauges.map((gauge, gaugeIndex) => (
                          <p
                            className="mx-2 w-14 rounded bg-gray-200 py-1 text-center text-gray-700"
                            key={gaugeIndex}
                          >
                            {gauge}
                          </p>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
